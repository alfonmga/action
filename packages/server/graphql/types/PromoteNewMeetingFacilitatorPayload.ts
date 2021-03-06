import {GraphQLObjectType} from 'graphql'
import {makeResolve, resolveNewMeeting} from '../resolvers'
import StandardMutationError from './StandardMutationError'
import NewMeeting from './NewMeeting'
import User from './User'

const PromoteNewMeetingFacilitatorPayload = new GraphQLObjectType({
  name: 'PromoteNewMeetingFacilitatorPayload',
  fields: () => ({
    error: {
      type: StandardMutationError
    },
    meeting: {
      type: NewMeeting,
      description: 'The meeting in progress',
      resolve: resolveNewMeeting
    },
    oldFacilitator: {
      type: User,
      description: 'The old meeting facilitator',
      resolve: makeResolve('oldFacilitatorUserId', 'oldFacilitator', 'users')
    }
  })
})

export default PromoteNewMeetingFacilitatorPayload
