export class CreateArticleDTO {
  readonly title: string;
  readonly content: string;
  readonly contentToHtml: string;
  readonly toc: string;
  readonly tags: [string];
  readonly visit_count: number;
  readonly create_at: Date;
  readonly create_by: string;
  readonly update_at: Date;
  readonly update_by: string;
}