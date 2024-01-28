import styled from "styled-components";
import { Bubble } from "./Bubbles";
import { useAppContext } from "../contexts/AppContext";
import { ConversationProps } from "../utils";
import { useEffect } from "react";

const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 0.9;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--light-gray);
  }
  &::-webkit-scrollbar-thumb {
    background: #636a77;
    border-radius: 25px;
  }
`;

export const Responses = () => {
  const { conversation } = useAppContext() as any;
  useEffect(() => {
    const lastConv = conversation[conversation.length - 1];
    if (!lastConv) return;
    const recentBubble = document.getElementById(`bubble-${lastConv.id}`);
    if (recentBubble) {
      recentBubble.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  return (
    <ConversationWrapper className="conv-wrapper">
      {conversation.length !== 0 ? (
        conversation.map((conv: ConversationProps) => (
          <Bubble key={conv.id} {...conv} />
        ))
      ) : (
        <></>
      )}
    </ConversationWrapper>
  );
};
