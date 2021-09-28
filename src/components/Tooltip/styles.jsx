import styled from "styled-components";

export const Container= styled.div`
position: relative;
span{
  width: 160px;
  background:#321292;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.4s;
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translate(-50%);
  color:#a8aBA3;
  visibility: hidden;

  &::before{
    content: '';
    border-style:solid;
    border-color: #321292 transparent;
    border-width: 6px 6px 0 6px;
    bottom: 20px;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }

}
&:hover span{
        opacity: 1;
        visibility: visible;
      }

`