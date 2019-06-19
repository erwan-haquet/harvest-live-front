/**
 * A general form error
 */
class FormError extends Error {
  constructor(body) {
    super();

    this.message = body.detail;
    this.violations = body.violations;
  }

  toString() {
    return this.message;
  }
}

export default FormError;
