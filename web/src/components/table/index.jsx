import React from 'react'

const Table = (props) => {

    console.log(props.lines[0].properties)

    let headers = [];
    for (const line in props.lines[0]) {
        headers.push(line);
    }

    const writeTableData = (line) => {
        const content = [];
        for (const prop in line) {
            content.push(<td>{line[prop]}</td>);
        }
        return content;
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {
                        headers.map((hr, index) => {
                            return <th scope="col">{hr}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.lines.map((line, index) => {
                        return (
                            <tr key={index}>
                                {writeTableData(line)}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;