import getXmSign from "./xmSign";

const d = 1556881840150;
const t = 1556881840708;
const r = /76e9f37a6d287a901acb0f780984d357\(.{1,2}\)1556881840708\(.{2}\)1556881840150/;
describe("xm sign", () => {
  test("get xm sign", () => {
    expect(getXmSign(d, t)).toMatch(r);
  });
});
