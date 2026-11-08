import { describe, it as test } from "node:test";
import { strict as assert } from "node:assert";
import { siteContact } from "./contact";

describe("site contact destinations", () => {
  test("WhatsApp uses the requested number", () => {
    assert.equal(siteContact.whatsappNumber, "60143129489");
    assert.equal(siteContact.whatsappDisplay, "+60143129489");
    assert.equal(siteContact.whatsappUrl, "https://wa.me/60143129489");
  });
  test("WeChat uses the requested ID", () => {
    assert.equal(siteContact.wechatId, "Saben07");
  });
  test("Phone calls the requested number", () => {
    assert.equal(siteContact.phoneDisplay, "+60143129489");
    assert.equal(siteContact.phoneUrl, "tel:+60143129489");
  });
  test("Email remains unchanged", () => {
    assert.equal(siteContact.email, "sales@sapixel.my");
  });
});