import { toastr } from 'react-redux-toastr'
import api from '../../services/api'

export function obterTable(idTable) {

    // api.get("lancamentos")
    //     .then(resp => {
    //         console.log("teste", resp.data)
    //     })
    //     .catch(e =>
    //         console.log("teste erro", e)
    //     )

    const table = [];

    return { type: 'TABLE', payload: table }
}