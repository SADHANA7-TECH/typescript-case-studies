abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish() {
    this.published = true;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  abstract getType(): string;
}

class Assignment extends Content {
  private dueDate: Date | null = null;

  constructor(title: string, author: string) {
    super(title, author);
  }

  public setDueDate(date: Date, isInstructor: boolean): void {
    if (this.isPublished()) {
      throw new Error("Cannot set due date after publishing.");
    }

    if (!isInstructor) {
      throw new Error("Only instructors can set the due date.");
    }

    this.dueDate = date;
  }

  public getDueDate(): Date | null {
    return this.dueDate;
  }

  getType(): string {
    return "Assignment";
  }
}