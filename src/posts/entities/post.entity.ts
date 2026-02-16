import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// An entity is a class that represents a database table.
@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id!: number; 
    // ! tells TypeScript that these values will be assigned by TypeORM at runtime,
    //  which resolves the strict mode errors while maintaining type safety.

    @Column({ length: 50 })
    title!: string;

    @Column({ type: 'text' })
    content!: string;

    @Column()
    authorName!: string;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updatedDate!: Date;
}