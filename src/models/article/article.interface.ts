import { Document } from 'mongoose';

export interface Article extends Document {
  readonly title: string,
  readonly content: string,
  readonly contentToHtml: string,
  readonly toc: string,
  readonly tags: [string],
  readonly visit_count: number,
  readonly create_at: Date,
  readonly create_by: string,
  readonly update_at: Date,
  readonly update_by: string,
  readonly is_deleted: number,
  readonly delete_at: Date,
  readonly delete_by: string
}