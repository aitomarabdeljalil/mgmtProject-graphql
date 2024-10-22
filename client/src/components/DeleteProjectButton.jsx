import { FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { GET_PROJECTS } from "../queries/projectQuires"
import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../mutation/projectMutations"

export default function DeleteProjectButton( { projectId } ) {
  const navigate = useNavigate();
  const [deletePreject] = useMutation(DELETE_PROJECT, {
    variables: {id:projectId},
    onCompleted: () => navigate('/'),
    refetchQueries: [{query: GET_PROJECTS }]
  });
  
  return (
    <div className="d-flex ms-auto">
      <button className="btn btn-danger m-2" onClick={deletePreject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  )
}
