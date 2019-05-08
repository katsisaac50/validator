import React, { Fragment } from "react";
import Validator from "validatorjs";
import { flatten } from "flat";

export default () => {
  const model = {
    name: "React",
    nodes: [
      {
        name: "node 1",
        options: {
          a: "option 1a",
          b: null,
          c: null
        }
      },
      {
        name: "node 2",
        options: {
          a: "option 2a",
          b: "option 2b",
          c: null
        }
      },
      {
        name: "node 3",
        options: {
          a: null,
          b: "option 3b",
          c: "option 3c"
        }
      }
    ]
  };

  const nodeRules = {
    name: "required",
    options: {
      a: "required",
      b: "required_if:a",
      c: "required_with:a,b"
    }
  };

  const rules = {
    name: "required",
    "nodes.*": nodeRules
  };

  const validator = new Validator(model, rules);
  validator.check();

  const validatorFlat = new Validator(model, flatten(rules));
  validatorFlat.check();

  console.log(flatten(rules));

  return (
    <Fragment>
      <h4>Errors</h4>
      <div>
        {Object.entries(validator.errors.all()).map(([key, value]) => {
          return (
            <li>
              {key}: {value}
            </li>
          );
        })}
      </div>
      <h4>Errors (flattened rules)</h4>
      <div>
        {Object.entries(validatorFlat.errors.all()).map(([key, value]) => {
          return (
            <li>
              {key}: {value}
            </li>
          );
        })}
      </div>
    </Fragment>
  );
};
