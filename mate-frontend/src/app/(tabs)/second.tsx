import BaseView from "@/components/BaseView";
import PickedTime from "@/components/PickedTime";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const NewEventScreen = () => {
  return (
    <BaseView>
      <View>
        <Text className="text-slate-100">Calendar Here</Text>
      </View>
      <View className="max-w-2xl">
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PickedTime />}
        />
      </View>
    </BaseView>
  );
};

export default NewEventScreen;
