"use strict";

/**
 * A set of functions called "actions" for `email`
 */

module.exports = {
  /**
   * Sends an email to the recipient in the body of the request
   */
  send: async (ctx) => {
    const { email, name } = ctx.request.body;

    strapi.log.debug(`Trying to send an email to ${email}`);

    try {
      const emailOptions = {
        to: email,
        subject: "CoffeeHub newsletter",
        text: "CoffeeHub newsletter",
        html: `<h3>Hello ${name || ""}!</h3>
        <p>Thank you for joining our newsletter :)</p>
        <p>CoffeeHub Team<p/>`,
      };
      await strapi.plugin("email").service("email").send(emailOptions);
      strapi.log.debug(`Email sent to ${email}`);
      ctx.send({ message: "Email sent" });
    } catch (err) {
      strapi.log.error(`Error sending email to ${email}`, err);
      ctx.send({ error: "Error sending email" });
    }
  },
};
