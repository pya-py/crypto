import "./table.css";

const Table = ({ rows, headers }) => {
    return (
        <table className="custom-table ">
            <tr>
                {headers.map((h, index) => (
                    <th
                        className="background-orange"
                        style={{
                            padding: "1rem",
                            textAlign: index > 0 ? "right" : "left",
                        }}
                    >
                        {h}
                    </th>
                ))}
            </tr>
            {rows.map((row, ri) => (
                <tr>
                    {row.map((column, ci) => (
                        <td
                            style={{
                                textAlign: ci > 0 ? "right" : "left",
                                paddingTop: ci> 0 ? "2rem" : 0,
                                color: ci === 2 ? "red" : "white"
                            }}
                        >
                            {column}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
};

export default Table;
