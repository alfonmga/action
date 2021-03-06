import AgendaItemsStage from './AgendaItemsStage'
import {AGENDA_ITEMS} from '../../../client/utils/constants'
import GenericMeetingPhase from './GenericMeetingPhase'

export default class AgendaItemsPhase extends GenericMeetingPhase {
  stages: AgendaItemsStage[]

  constructor (agendaItemIds: string[], durations: number[] | undefined) {
    super(AGENDA_ITEMS)
    this.stages = agendaItemIds.map((id) => new AgendaItemsStage(id, durations))
  }
}
