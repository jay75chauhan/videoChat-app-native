import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuItem = [
  {
    type: "starred",
    name: "starred",
  },

  {
    type: "contact",
    name: "elone Musk",
    photo:
      "data:image/jpeg;base64,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",
  },
  {
    type: "contact",
    name: "steve jobs",
    photo:
      "data:image/jpeg;base64,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",
  },
  {
    type: "contact",
    name: "bill gates",
    photo:
      "data:image/jpeg;base64,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",
  },
];

export default function ContactsMenu() {
  return (
    <View style={tw`mt-5`}>
      {contactsMenuItem.map((contact, index) => (
        <View key={index} style={tw`flex-row items-center my-3 rounded-2xl`}>
          {contact.type == "starred" ? (
            <View style={tw`p-3 rounded-xl bg-gray-500 mr-5`}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <View style={tw`mr-5`}>
              <Image
                source={{ uri: contact.photo }}
                style={tw`w-14 h-14 rounded-2xl   `}
              />
            </View>
          )}

          <Text style={tw`text-gray-200 text-2xl font-semibold`}>
            {contact.name}
          </Text>
        </View>
      ))}
    </View>
  );
}
