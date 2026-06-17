export type InventoryClassificationOptionLegacyRow = {
  SLOT: string | null;
  FAMILY: string | null;
  DESCRIPTION: string | null;
  PARENT: string | null;
  CONSEC: number | string | null;
};

type InventoryClassificationOptionProps = {
  slot: string;
  family: string;
  description: string;
  parent: string;
  order: number;
};

export class InventoryClassificationOptionEntity {
  public readonly slot: string;
  public readonly family: string;
  public readonly description: string;
  public readonly parent: string;
  public readonly order: number;

  private constructor(props: InventoryClassificationOptionProps) {
    this.slot = props.slot;
    this.family = props.family;
    this.description = props.description;
    this.parent = props.parent;
    this.order = props.order;
  }

  private static asString(value: string | null | undefined): string {
    return value === null || value === undefined ? "" : String(value).trim();
  }

  private static asNumber(value: number | string | null | undefined): number {
    if (value === null || value === undefined || value === "") {
      return 0;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  public static fromLegacyRow(
    row: InventoryClassificationOptionLegacyRow
  ): InventoryClassificationOptionEntity {
    return new InventoryClassificationOptionEntity({
      slot: InventoryClassificationOptionEntity.asString(row.SLOT),
      family: InventoryClassificationOptionEntity.asString(row.FAMILY),
      description: InventoryClassificationOptionEntity.asString(row.DESCRIPTION),
      parent: InventoryClassificationOptionEntity.asString(row.PARENT),
      order: InventoryClassificationOptionEntity.asNumber(row.CONSEC)
    });
  }
}

