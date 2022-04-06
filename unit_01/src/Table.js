function Table () {
    const t = (
        <table>
            <tbody>
                <tr>
                    <th>header 1</th>
                    <th>header 2</th>
                </tr>

                <tr>
                    <td> Первый блок</td>
                    <td> Второй блок</td>
                </tr>
            </tbody>
        </table>
    )

    return (
    <div>Таблица:
        {t}
    </div>);
}


export default Table;