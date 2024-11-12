import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "./useLanguage";
import { Translation } from "../constants";
import { useTranslation } from "react-i18next";
import { act } from "react"; // Import act from react
import '@testing-library/jest-dom';

jest.mock("react-i18next", () => ({
    useTranslation: jest.fn(),
}));

const mockUseTranslation = useTranslation as jest.Mock;

describe("LanguageProvider", () => {
    const mockI18n = {
        language: "en",
        changeLanguage: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
    };

    beforeEach(() => {
        mockUseTranslation.mockReturnValue({ i18n: mockI18n });
        localStorage.clear();
    });

    const TestComponent = () => {
        const { selectedLanguage, languages, changeLanguage } = useLanguage();
        return (
            <div>
                <p>Selected: {selectedLanguage.abbreviation}</p>
                {languages.map((lang) => (
                    <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
                        {lang.abbreviation}
                    </button>
                ))}
            </div>
        );
    };

    const renderWithProvider = () =>
        act(() => {
            render(
                <LanguageProvider>
                    <TestComponent />
                </LanguageProvider>
            );
        });

    it("initializes with language from localStorage or i18n.language", () => {
        localStorage.setItem("selectedLanguage", "uk");
        renderWithProvider();
        expect(screen.getByText("UA")).toBeInTheDocument();
    });

    it("defaults to the first language if no saved language or i18n.language is set", () => {
        renderWithProvider();
        expect(screen.getAllByText("ENG")[0]).toBeInTheDocument();
    });

    it("changes language when a button is clicked", () => {
        renderWithProvider();
        const uaButton = screen.getByRole("button", { name: "UA" });
        fireEvent.click(uaButton);

        expect(mockI18n.changeLanguage).toHaveBeenCalledWith(Translation.Languages.uk_UA.key);
        expect(localStorage.getItem("selectedLanguage")).toBe(Translation.Languages.uk_UA.key);
    });

    it("updates selected language when i18n language changes", async () => {
        renderWithProvider();
        expect(screen.getAllByText("ENG")[0]).toBeInTheDocument();

        // Simulate languageChanged event
        mockI18n.on.mock.calls[0][1]("uk");
        await waitFor(() => expect(screen.getByText("UA")).toBeInTheDocument());
    });

    it("throws error if useLanguage is used outside LanguageProvider", () => {
        const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
        expect(() => render(<TestComponent />)).toThrowError(
            "useLanguage must be used within a LanguageProvider"
        );
        consoleError.mockRestore();
    });
});

// Suppress the specific ReactDOMTestUtils.act deprecation warning temporarily
beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((message) => {
        if (!message.includes("ReactDOMTestUtils.act is deprecated")) {
            console.warn(message);
        }
    });
});

afterAll(() => {
    jest.restoreAllMocks();
});
