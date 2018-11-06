const linkClass = {
    link: (value?: boolean) => value ? `link` : null
};

interface Link {
    link: boolean
}

export { linkClass, Link }