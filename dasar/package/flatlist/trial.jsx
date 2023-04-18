import React from "react";
import { Text, FlatList, Button, ListRenderItem } from "react-native";

export const Trial = () => {
  const data = [{ key: "hello word" }, { key: "dunia" }, { key: "tipu tipu" }];
  const render = ({ item }) => <Button title={item.key} />;
  return (
    // <FlatList
    //   data={[{ key: "hello" }, { key: "dunia" }, { key: "tipu tipu" }]}
    //   renderItem={({ item }) => <Text>{item.key}</Text>}
    // />
    <FlatList data={data} renderItem={render} />
  );
};
