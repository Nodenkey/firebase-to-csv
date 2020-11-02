export const download = (data) => {
    // make data container/ files aka blob
    const blob = new Blob([data], {type: 'text/csv'});
    // create a url to put in an anchor tag for download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'register.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
