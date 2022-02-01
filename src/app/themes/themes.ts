export interface Theme{
    name: string;
    properties: any;
}

export const darkTheme: Theme = {
    name: 'dark',
    properties: {
        '--background': 'linear-gradient(135deg, #141e30, #243b55)',
        '--primary-text':'#ffffff',
        '--transparency': '#ffffff0f',
        '--transparency-button-selected': '#ffffff1f',
        '--no-background': "#00000000",
        '--font': 'Sans serif'
    }
};

export const greenTheme: Theme = {
    name: 'green',
    properties: {
        '--background': 'linear-gradient(135deg, #134e5e, #71b280)',
        '--primary-text':'#ffffff',
        '--transparency': '#ffffff0f',
        '--transparency-button-selected': '#ffffff1f',
        '--no-background': "#00000000",
        '--font': 'Sans serif'
        
    }
};

export const grayTheme: Theme = {
    name: 'gray',
    properties: {
        '--background': 'linear-gradient(135deg, #2c3e50, #bdc3c7)',
        '--primary-text':'#ffffff',
        '--transparency': '#0000000f',
        '--transparency-button-selected': '#ffffff1f',
        '--no-background': "#00000000",
        '--font': 'Sans serif'
        
    }
};

export const violetTheme: Theme = {
    name: 'violet',
    properties: {
        '--background': 'linear-gradient(135deg, #7367f0, #ce9ffc)',
        '--primary-text':'#000000',
        '--transparency': '#0000000f',
        '--transparency-button-selected': '#ffffff1f',
        '--no-background': "#00000000",
        '--font': 'Sans serif'
        
    }
};

export const pinkTheme: Theme = {
    name: 'pink',
    properties: {
        '--background': 'linear-gradient(135deg, #89216b, #ce546d)',
        '--primary-text':'#ffffff',
        '--transparency': '#ffffff0f',
        '--transparency-button-selected': '#ffffff1f',
        '--no-background': "#00000000",
        '--font': 'Roboto'
        
    }
};

export const yellowTheme: Theme = {
    name: 'yellow',
    properties: {
        '--background': 'linear-gradient(135deg, #ffe600, #ff7c22)',
        '--primary-text':'#000000',
        '--transparency': '#0000000f',
        '--transparency-button-selected': '#ffffff4f',
        '--no-background': "#00000000",
        '--font': 'monospace'
        
    }
};

export const blueTheme: Theme = {
    name: 'blue',
    properties: {
        '--background': 'linear-gradient(135deg, #323232, #9b9b9b)',
        '--primary-text':'#ffffff',
        '--transparency': '#ffffff0f',
        '--transparency-button-selected': '#ffffff1f',
        '--no-background': "#00000000",
        '--font': 'Sans serif'
        
    }
};