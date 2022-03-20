import { TransferType } from "./transferType";
import { Tag } from "./tag";

export class Transfer {
  id?: number
  title: string | undefined
  description: string | undefined
  transferType: TransferType | undefined
  tags?: Tag[]
  dateTime: string | undefined
  count: string | undefined
}
