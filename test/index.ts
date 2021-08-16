import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

chai.use(sinonChai);

const { assert } = chai;

import PromiseX from "../src";

describe("Promise", () => {
  it("是一个类", () => {
    assert.isFunction(PromiseX);
    assert.isObject(PromiseX.prototype);
  });
});
