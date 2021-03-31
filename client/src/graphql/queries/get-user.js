import { gql } from '@apollo/client';

export default gql`
    query getUser($id: String){
        user(id: $id){
            id
            username
            email
        }
    }
`;