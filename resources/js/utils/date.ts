import dayjs, {
    OpUnitType,
    QUnitType,
    type ConfigType as dayjsConfigType,
} from "dayjs";

export type ConfigType = dayjsConfigType;
export function getTimestamp(date: ConfigType): number {
    return dayjs(date).valueOf();
}

export function getDiffFromNow(
    date: ConfigType,
    unit?: QUnitType | OpUnitType
): number {
    return dayjs(date).diff(dayjs(), unit);
}

export function addMinutes(date: ConfigType, minutes: number): ConfigType {
    return dayjs(date).add(minutes, "minute").toDate();
}

export function formatDateTime(
    date: ConfigType = new Date(),
    format: string = "YYYY-MM-DD HH:mm:ss"
): string {
    return date ? dayjs(date).format(format) : "";
}

export function isBeforeNow(date: ConfigType): boolean {
    return dayjs(date).isBefore(dayjs());
}
