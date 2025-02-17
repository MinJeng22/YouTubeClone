export default function createSvgIcon(icon) {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 0 24 24">
            <path clip-rule="evenodd" d="${icon}" fill-rule="evenodd"></path>
        </svg>
    `;
}
