export class Step {
  constructor(
    id: number | null,
    title: string,
    text: string,
  ) {}

  public static fromJson(json: Map<string, any>): Step {
    return new Step(
      json.get('id'),
      json.get('title'),
      json.get('text')
    );
  }
}
