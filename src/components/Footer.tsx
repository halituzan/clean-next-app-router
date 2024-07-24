"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useTranslations } from "next-intl";

type Props = {};

function Footer({}: Props) {
  const t = useTranslations("Footer");
  return (
    <div className='flex items-center justify-between w-full px-10'>
      <div className='flex items-center'>
        <p className='font-semibold'>{t("name")}</p>
        <a
          href='https://github.com/halituzan'
          target='_blank'
          className='rounded-md bg-white p-1 ml-2 cursor-pointer'
        >
          <Icon icon='line-md:github' className='text-rose-600' fontSize={18} />
        </a>
        <a
          href='https://www.linkedin.com/in/halituzan/'
          target='_blank'
          className='rounded-md bg-white p-1 ml-2 cursor-pointer'
        >
          <Icon
            icon='line-md:linkedin'
            className='text-rose-600'
            fontSize={18}
          />
        </a>
        <a
          href='https://x.com/uzandev'
          target='_blank'
          className='rounded-md bg-white p-1 ml-2 cursor-pointer'
        >
          <Icon
            icon='line-md:twitter-x'
            className='text-rose-600'
            fontSize={18}
          />
        </a>
      </div>
      <span>{t("madeBy")}</span>
    </div>
  );
}

export default Footer;
