import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { href } from "react-router"
import { useTranslation } from "react-i18next"

const PagePath = () => {

  const {t} = useTranslation();

  return (
    <Breadcrumb className="px-22 font-satoshi text-2xl mt-5">
      <BreadcrumbList className="text-text-300">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{(t('breadcrumb.home'))}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/shop">{(t('breadcrumb.shop'))}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/shop/men">{(t('breadcrumb.men'))}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-black" href="/shop/men/t-shirt">
            {(t('breadcrumb.tshirt'))}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
  
}

export default PagePath
