export interface PointsFormData {
    quantity: number,
    sleep: number,
    random: 'uniform' | 'smart',
    min_x: number, max_x: number,
    min_y: number, max_y: number
}
