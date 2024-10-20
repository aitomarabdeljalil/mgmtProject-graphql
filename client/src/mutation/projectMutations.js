import { gql } from "@apollo/client";

const ADD_PROLECT = gql`
    mutation addProject($name: String!, $description: String!, $status: $String!, $clientId: InD!) {
        addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
            id
            name
            description
            status
            client {
                name
            }
        }
    }
`;

const DELETE_PROLECT = gql`
    mutation deleteProject ($id: ID!) {
        deleteProject(id: $id) {
            id
            name
            description
            status
            client {
                name
            }
        }
    }
`;

export {ADD_PROLECT, DELETE_PROLECT}