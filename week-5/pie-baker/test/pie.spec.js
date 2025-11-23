/**
 * Author: Jarren Bess
 * Date: Nov 22, 2025
 * File Name: pie.spec.js
 * Description: Unit tests for pie.js module
 */

"use strict";

const { bakePie } = require("../src/pie");

const exit = jest.spyOn(process, "exit").mockImplementation((code) => code);

describe("bakePie", () => {
  test("pie was successfully baked", () => {
    let log = jest.spyOn(console, "log");
    bakePie("apple", ["flour", "sugar", "butter"]);
    expect(log).toHaveBeenCalledWith("apple pie baked successfully");
    expect(exit).not.toHaveBeenCalled();
    log.mockRestore();
  });

  test("pie not baked successfully", () => {
    let warn = jest.spyOn(console, "warn");
    bakePie("apple", ["flour", "sugar"]);
    expect(warn).toHaveBeenCalledWith("apple pie not baked successfully");
    warn.mockRestore();
  });

  test("bakePie exits with missing essential ingredient", () => {
    bakePie("apple", ["flour", "sugar"]);
    expect(exit).toHaveBeenCalledWith(1);
  });
});
