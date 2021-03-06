import {GraphQLObjectType} from 'graphql'
import Team from './Team'
import {resolveTeam} from '../resolvers'
import StandardMutationError from './StandardMutationError'

const UpdateTeamNamePayload = new GraphQLObjectType({
  name: 'UpdateTeamNamePayload',
  fields: () => ({
    error: {
      type: StandardMutationError
    },
    team: {
      type: Team,
      resolve: resolveTeam
    }
  })
})

export default UpdateTeamNamePayload
