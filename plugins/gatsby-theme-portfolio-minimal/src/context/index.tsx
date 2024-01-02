import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export enum Theme {
    Light = 'lightTheme',
    Dark = 'darkTheme',
}

export enum ActionType {
    SetTheme = 'SET_THEME',
    SetSplashScreenDone = 'SET_SPLASH_SCREEN_DONE',
}

type Dispatch = (action: Action) => void;
type GlobalState = { theme: Theme; splashScreenDone: boolean };
type Action = { type: ActionType.SetTheme; value: Theme } | { type: ActionType.SetSplashScreenDone; value: boolean };

interface GlobalStateProviderProps {
    children: React.ReactElement;
    defaultTheme: Theme;
    useDarkModeBasedOnUsersPreference: boolean;
    useSplashScreenAnimation: boolean;
}

const GlobalStateContext = React.createContext<{ globalState: GlobalState; dispatch: Dispatch } | undefined>(undefined);

export const GlobalStateProvider = ({ children, defaultTheme, useDarkModeBasedOnUsersPreference, useSplashScreenAnimation }) => {
    const [globalState, dispatch] = React.useReducer(globalStateReducer, {
        theme: initializeTheme(defaultTheme, useDarkModeBasedOnUsersPreference),
        splashScreenDone: useSplashScreenAnimation ? false : true,
    });

    const toggleTheme = () => {
        const newTheme = globalState.theme === Theme.Dark ? Theme.Light : Theme.Dark;
        if (typeof document !== 'undefined') {
            document.documentElement.classList.add('transition-all');
    
            setTimeout(() => {
                dispatch({ type: ActionType.SetTheme, value: newTheme });
            }, 1);
    
            // Remove the transition-all class after 1 second
            setTimeout(() => {
                document.documentElement.classList.remove('transition-all');
            }, 1000);
        }
    };

    return (
        <GlobalStateContext.Provider value={{ globalState, dispatch, toggleTheme }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export function useGlobalState(): { globalState: GlobalState; dispatch: Dispatch } {
    const context = React.useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
}

function globalStateReducer(state: GlobalState, action: Action) {
    switch (action.type) {
        case ActionType.SetTheme: {
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.value);
                localStorage.setItem('isThemeManuallySet', 'true');
            }
            return { ...state, theme: action.value };
        }
        case ActionType.SetSplashScreenDone: {
            return { ...state, splashScreenDone: action.value };
        }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}

export function initializeTheme(defaultTheme: Theme, useDarkMode: boolean): Theme {
    let savedTheme: string | null = null;
    let isThemeManuallySet: string | null = null;

    if (typeof window !== 'undefined') {
        savedTheme = localStorage.getItem('theme');
        isThemeManuallySet = localStorage.getItem('isThemeManuallySet');
    }

    if (isThemeManuallySet === 'true' && savedTheme) {
        return savedTheme === 'lightTheme' ? Theme.Light : Theme.Dark;
    }

    const darkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)', (isMatch) => {
        const updatedTheme = isMatch ? Theme.Dark : Theme.Light;
        if (typeof window !== 'undefined') {
            document.body.setAttribute('data-theme', updatedTheme);
        }
    });

    let initialTheme = defaultTheme;
    if (useDarkMode && darkModeEnabled) {
        initialTheme = Theme.Dark;
    }

    return initialTheme;
}
