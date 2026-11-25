/** An error whose message is safe to show to the admin. */
export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}
