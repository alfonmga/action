import {GraphQLID, GraphQLNonNull, GraphQLObjectType} from 'graphql'
import Team from './Team'
import Notification, {notificationInterfaceFields} from './Notification'
import Task from './Task'
import TaskInvolvementType from './TaskInvolvementType'
import TeamMember from './TeamMember'
import TeamNotification from './TeamNotification'

const NotifyTaskInvolves = new GraphQLObjectType({
  name: 'NotifyTaskInvolves',
  description: 'A notification sent to someone who was just added to a team',
  interfaces: () => [Notification, TeamNotification],
  fields: () => ({
    ...notificationInterfaceFields,
    involvement: {
      type: new GraphQLNonNull(TaskInvolvementType),
      description: 'How the user is affiliated with the task'
    },
    taskId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The taskId that now involves the userId'
    },
    task: {
      type: new GraphQLNonNull(Task),
      description: 'The task that now involves the userId',
      resolve: ({taskId}, _args, {dataLoader}) => {
        return dataLoader.get('tasks').load(taskId)
      }
    },
    changeAuthorId: {
      type: GraphQLID,
      description: 'The teamMemberId of the person that made the change'
    },
    changeAuthor: {
      type: new GraphQLNonNull(TeamMember),
      description: 'The TeamMember of the person that made the change',
      resolve: ({changeAuthorId}, _args, {dataLoader}) => {
        return dataLoader.get('teamMembers').load(changeAuthorId)
      }
    },
    teamId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    team: {
      type: new GraphQLNonNull(Team),
      description: 'The team the task is on',
      resolve: ({teamId}, _args, {dataLoader}) => {
        return dataLoader.get('teams').load(teamId)
      }
    }
  })
})

export default NotifyTaskInvolves
