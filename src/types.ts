export type FunctionData = {
  description: null | string
  name: string
  parameters: Array<ParameterData>
  returnType: null | ReturnTypeData
  tags: null | TagsData
  typeParameters: Array<TypeParameterData>
}

export type ParameterData = {
  description: null | string
  name: string
  optional: boolean
  type: string | ObjectData
}

export type ObjectData = {
  keys: Array<ParameterData>
  type: 'object'
}

export type ReturnTypeData = {
  description: null | string
  type: string
}

export type TagsData = Record<string, null | string>

export type TypeParameterData = {
  name: string
  defaultType: null | string
  type: null | string
}
