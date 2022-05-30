import { gql, GraphQLClient } from 'graphql-request';

export const getData = async (query, entity) => {
  const url = process.env.REACT_APP_ENDPOINT;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": process.env.REACT_APP_GRAPH_CMS_TOKEN
    }
  });

  const data = await graphQLClient.request(query);

  return data[entity];
}

export const getServices = gql`
  query {
    services {
      id,
      title,
      description,
      servicesList,
      image {
        url
      }
    }
  }
`

export const getAdministrations = gql`
  query {
    administrations {
      id,
      name,
      position,
      statement,
      telephone,
      image {
        url
      }
    }
  }
`

export const getCertificates = gql`
  query {
    certificates {
      id,
      title,
      image {
        url
      }
    }
  }
`

export const getContacts = gql`
  query {
    contacts {
      id,
      position,
      name,
      mail,
      number,
    }
  }
`

export const getLicenses = gql`
  query {
    licenses {
      id,
      title,
      description,
      image {
        url
      }
    }
  }
`

export const getShareholders = gql`
  query {
    shareholders {
      id,
      year,
      date,
      time,
      agenda,
      docs {
        id,
        title,
        document {
          url
        }
      }
    }
  }
`