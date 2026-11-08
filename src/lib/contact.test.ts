import { describe, expect, test } from "bun:test";
import { siteContact } from "./contact";

describe("site contact destinations", () => {
  test("WhatsApp uses the requested number", () => {
    expect(siteContact.whatsappNumber).toBe("60143129489");
    expect(siteContact.whatsappDisplay).toBe("+60143129489");
    expect(siteContact.whatsappUrl).toBe("https://wa.me/60143129489");
  });
  test("WeChat uses the requested ID", () => {
    expect(siteContact.wechatId).toBe("Saben07");
  });
  test("Phone calls the requested number", () => {
    expect(siteContact.phoneDisplay).toBe("+60143129489");
    expect(siteContact.phoneUrl).toBe("tel:+60143129489");
  });
  test("Email remains unchanged", () => {
    expect(siteContact.email).toBe("sales@sapixel.my");
  });
});