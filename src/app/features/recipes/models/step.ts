export class Step {
  constructor(
    public id: number | null,
    public title: string,
    public text: string,
  ) {}

  public static fromJson(json: any): Step {
    return new Step(
      json.id,
      json.title,
      json.text
    );
  }
}
