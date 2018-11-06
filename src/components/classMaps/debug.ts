const debugClass = {
    debug: (value: boolean | string) => {
        if(typeof value === 'string') {
            return `debug-${value}`;
        }
        return 'debug';
    },
    debugGrid: (value: boolean | string) => {
        if(typeof value === 'string') {
            return `debug-grid-${value}`;
        }
        return 'debug-grid';
    }
};

interface Debug {
    debug: boolean | 'black' | 'white';
    debugGrid?: boolean | '16' | '8-solid' | '16-solid'
}

    
export { debugClass, Debug };