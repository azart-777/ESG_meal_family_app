import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LanguageSwitch } from './LanguageSwitch';
import { useLanguage } from '../../shared/hooks/useLanguage';
import { Translation } from '../../shared/constants'; // Import the translation constants

jest.mock('../../shared/hooks/useLanguage');

const mockUseLanguage = useLanguage as jest.Mock;

describe('LanguageSwitch', () => {
  beforeEach(() => {
    // Mock the return value of the useLanguage hook to match the updated structure
    mockUseLanguage.mockReturnValue({
      selectedLanguage: {
        code: Translation.Languages.en_US.key,
        name: Translation.Languages.en_US.languageSwitchMenuItemText,
        abbreviation: 'ENG',
      },
      languages: [
        {
          code: Translation.Languages.en_US.key,
          name: Translation.Languages.en_US.languageSwitchMenuItemText,
          abbreviation: 'ENG',
        },
        {
          code: Translation.Languages.uk_UA.key,
          name: Translation.Languages.uk_UA.languageSwitchMenuItemText,
          abbreviation: 'UA',
        },
      ],
      changeLanguage: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the LanguageSwitch component with the initial language', () => {
    const { container } = render(<LanguageSwitch />);
    const toggleButton = container.querySelector('.toggle') as HTMLElement;
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveTextContent('ENG');
  });

  it('toggles the menu visibility when the button is clicked', async () => {
    const { container } = render(<LanguageSwitch />);
    const toggleButton = container.querySelector('.toggle') as HTMLElement;
    const menuContainer = container.querySelector('.language_menu') as HTMLElement;

    // Click to open menu
    fireEvent.click(toggleButton);
    expect(menuContainer).toHaveClass('active');

    // Click to close menu
    fireEvent.click(toggleButton);
    await waitFor(() => expect(menuContainer).not.toHaveClass('active'));
  });

  it('displays available languages in the dropdown when the menu is open', () => {
    const { container } = render(<LanguageSwitch />);
    const toggleButton = container.querySelector('.toggle') as HTMLElement;

    fireEvent.click(toggleButton); // Open menu
    expect(screen.getByText('UA')).toBeInTheDocument(); // Check for "UA" instead of "Українська"
  });

  it('removes hover class when the mouse leaves and the menu is closed', () => {
    const { container } = render(<LanguageSwitch />);
    const toggleButton = container.querySelector('.toggle') as HTMLElement;

    fireEvent.mouseEnter(toggleButton);
    fireEvent.mouseLeave(toggleButton);
    expect(toggleButton).not.toHaveClass('hover');
  });
});
