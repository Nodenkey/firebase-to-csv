export const csvConverter = (data) => {
    console.log(data);
    //create rows for csv
    const csvRows = [];

    //get headers
    const headers = Object.keys(data[0]);
    //join the rows by a comma.. it becomes a string separated by comma
    csvRows.push(headers.join(","));

    //loop over rows
    for (const row of data) {
        const values = headers.map(header => {
            // in a csv you are allowed to quote each section, so let's use a quote to escape commas
            // but before that, we need to escape all quotes which may be present in the data
            const escaped = ("" + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        })
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
}
