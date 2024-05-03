export class Exception extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

export class InvalidDataException extends Exception {
  constructor(message) {
    super(message, 400)
  }
}

export class NotFoundException extends Exception {
  constructor(message) {
    super(message, 404)
  }
}
