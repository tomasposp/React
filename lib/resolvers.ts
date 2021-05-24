import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'

import firebaseConfig from "../pages/api/firebase"
import { addMockFunctionsToSchema } from 'graphql-tools'

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { gql } from '@apollo/client';




const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}
const Kryptomena = {
  id: String(1),
  jmeno: 'Bitcoin',
  cena: 1000000,
}

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return userProfile
  },

  viewerKryptomena(_parent, _args, _context, _info){
    return Kryptomena
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    console.log(`setting a new name to ${_args.name}`)
    userProfile.name = _args.name
    return userProfile
  },
}

export default { Query, Mutation}
