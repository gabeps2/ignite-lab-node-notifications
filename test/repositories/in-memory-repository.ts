import { Notification } from '../../src/application/entities/Notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

const notifications: Notification[] = [];

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
