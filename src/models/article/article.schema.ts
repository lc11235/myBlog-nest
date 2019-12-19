import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  contentToHtml: String,
  toc: String,
  tags: [String],
  visit_count: Number,
  create_at: { type: Date, default: Date.now },
  create_by: String,
  update_at: { type: Date, default: Date.now },
  update_by: String,
  is_deleted: { type: Number, default: 0 },
  delete_at: { type: Date },
  delete_by: String
});