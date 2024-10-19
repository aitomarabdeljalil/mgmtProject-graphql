import {FaTrash, FaPen} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutation/clientMutations';
import { UPDATE_CLIENT } from '../mutation/clientMutations';
import { GET_CLIENTS } from '../queries/clientQuires';


export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{query: GET_CLIENTS}]
    update(cache, {data: {deleteClient}}) {
      const {clients} = cache.readQuery({query: GET_CLIENTS});
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter(client => client.id !== deleteClient.id)}
      });
    }
  });
  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{query: GET_CLIENTS}]
    update(cache, {data: {updateClient}}) {
      const {clients} = cache.readQuery({query: GET_CLIENTS});
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter(client => client.id !== updateClient.id)}
      });
    }
  });

  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-info btn-sm me-3" onClick={updateClient}>
                <FaPen />
            </button>
            <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                <FaTrash />
            </button>
        </td>
    </tr>
  )
}
