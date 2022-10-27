import * as SQLite from "expo-sqlite";
import { categories } from "../constants/data/categories";

const db = SQLite.openDatabase("categories.db");

const createCategories = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS categories (title TEXT NOT NULL, color TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

const insertCategories = (title, color) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO categories (title, color) VALUES (?, ?);",
        [title, color],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const init = () => {
  createCategories();
  categories.forEach((categories) => {
    insertCategories(categories.title, categories.color);
  });
};

export const getCategories = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM categories",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
